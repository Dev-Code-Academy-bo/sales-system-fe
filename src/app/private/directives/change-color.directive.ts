import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from '../servicios/utility.service';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class ChangeColorDirective implements OnInit{

  @Input() nameToolTip: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private _ref: ElementRef, private renderer: Renderer2, private _utilityService: UtilityService) {

   }

   ngOnInit(): void {
    this.renderer.setStyle(this._ref.nativeElement, 'position', 'relative');
    fromEvent(this._ref.nativeElement, 'mouseenter').subscribe(() => {
      this.showTooltip();
    });

    fromEvent(this._ref.nativeElement, 'mouseleave').subscribe(() => {
      this.hideTooltip();
    });
   }

   private showTooltip() {
    // Crear el elemento del tooltip
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.nameToolTip)
    );
    
    // Aplicar estilos al tooltip
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'top', '100%');
    this.renderer.setStyle(this.tooltipElement, 'left', '0');
    this.renderer.setStyle(this.tooltipElement, 'transform', 'translateY(5px)');
    this.renderer.setStyle(this.tooltipElement, 'whiteSpace', 'nowrap');
    this.renderer.setStyle(this.tooltipElement, 'zIndex', '1000');

    // Agregar el tooltip al DOM
    this.renderer.appendChild(this._ref.nativeElement, this.tooltipElement);
  }

  private hideTooltip() {
    // Remover el tooltip del DOM si existe
    if (this.tooltipElement) {
      this.renderer.removeChild(this._ref.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
