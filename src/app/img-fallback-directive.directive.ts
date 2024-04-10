import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallbackDirective]',
})
export class ImgFallbackDirectiveDirective {
  //metto il putno esclamativco perché il valore sarà definito in un secondo momento
  @Input() appImgFallback!: any;
  constructor(private eRef: ElementRef) {}
  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.appImgFallback;
  }
}
//con questa direttiva, se una immagine non dovessse caricare dalla chiamata api, posso far si che come fallback abbia una delle immagini dentro asset
