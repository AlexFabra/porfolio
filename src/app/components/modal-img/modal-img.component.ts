import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from './modal.config';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {

  @Input() public modalConfig: ModalConfig | undefined;
  @ViewChild('modal') private modalContent: TemplateRef<ModalImgComponent> | undefined;
  private modalRef: NgbModalRef | undefined;

  @Input() name:string=''
  @Input() img:string='';

  constructor( private modalService: NgbModal) { }

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
