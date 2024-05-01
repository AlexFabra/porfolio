import { Component, Inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from './modal.config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {

  @Input() public modalConfig: ModalConfig | undefined;
  @ViewChild('modal') private modalContent: TemplateRef<ModalImgComponent> | undefined;

  @Input() name:string=''
  @Input() img:string='';

  modalRef:any;

  constructor( @Inject(NgbModal) private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  open(): Promise<boolean> {

    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent,{size:'lg'})
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    if (this.modalConfig!.shouldClose === undefined || (await this.modalConfig!.shouldClose())) {
      const result = this.modalConfig!.onClose === undefined || (await this.modalConfig!.onClose())
      this.modalRef!.close(result)
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig!.shouldDismiss === undefined || (await this.modalConfig!.shouldDismiss())) {
      const result = this.modalConfig!.onDismiss === undefined || (await this.modalConfig!.onDismiss())
      this.modalRef!.dismiss(result)
    }
  }

}
