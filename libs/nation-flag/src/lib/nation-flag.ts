const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: inline-block;
    fill: currentColor;
    width: 1em;
    height: 1em;
    font-size: 1rem;
  }
</style>
<div class="nf-container"></div>
`;

export type NationFlagVariant = 'bordered' | 'wavy' | 'combined' | 'none';

export class NationFlagElement extends HTMLElement {
  div: HTMLDivElement;

  static get observedAttributes(): string[] {
    return ['nation', 'variant'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.div = this.shadowRoot.querySelector('div');
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === 'nation') {
      if (oldValue) {
        this.div.firstChild.remove();
      }
      if (newValue) {
        const placeholder = document.createElement('div');
        placeholder.innerHTML = newValue;
        const svgElement = placeholder.firstChild;
        const cloneSvgElement = svgElement.cloneNode(true) as SVGElement;
        const newDefsElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'defs',
        );
        const newGroupElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'g',
        );
        newGroupElement.setAttribute('id', 'shape');
        const childPaths = Array.from(svgElement.childNodes);
        for (let i = 0; i < childPaths.length; i++) {
          const childPath = childPaths[i] as SVGPathElement;
          childPath.removeAttribute('fill');
          newGroupElement.appendChild(childPath);
        }
        // Clip Mask (border + shadow)
        const newMask = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'mask',
        );
        newMask.setAttribute('id', 'clipper');
        const whiteShape = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'use',
        );
        whiteShape.setAttribute('href', '#shape');
        whiteShape.setAttribute('fill', 'white');
        newMask.appendChild(whiteShape);
        const blackShape = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'use',
        );
        blackShape.setAttribute('href', '#shape');
        blackShape.setAttribute('fill', 'black');
        blackShape.setAttribute('transform', 'scale(0.95, 0.925)');
        blackShape.setAttribute('transform-origin', '18 18');
        newMask.appendChild(blackShape);
        // Linear gradient mask
        const newLinearGradient = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'linearGradient',
        );
        newLinearGradient.setAttribute('id', 'wave');
        newLinearGradient.setAttribute('gradientTransform', 'rotate(-45)');
        for (const [offset, stopColor] of [
          [0, 0],
          [25, 0.1],
          [50, 0],
          [75, 0.1],
          [100, 0.1],
        ]) {
          const stopGradient = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'stop',
          );
          stopGradient.setAttribute('offset', offset + '%');
          stopGradient.setAttribute(
            'stop-color',
            'rgba(255, 255, 255, ' + stopColor + ')',
          );
          newLinearGradient.appendChild(stopGradient);
        }
        // Append the defs into the svg element.
        newDefsElement.append(...[newGroupElement, newMask, newLinearGradient]);
        cloneSvgElement.appendChild(newDefsElement);
        // Append use definitions.
        const variant = this.getAttribute('variant') as NationFlagVariant;
        const waveUse = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'use',
        );
        waveUse.setAttribute('href', '#shape');
        waveUse.setAttribute('fill', 'url(#wave)');
        const clipperUse = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'use',
        );
        clipperUse.setAttribute('href', '#shape');
        clipperUse.setAttribute('fill', 'rgba(0, 0, 0, 0.5)');
        clipperUse.setAttribute('mask', 'url(#clipper)');
        switch (variant) {
          case 'bordered':
            cloneSvgElement.appendChild(waveUse);
            break;
          case 'wavy':
            cloneSvgElement.appendChild(clipperUse);
            break;
          case 'combined':
            cloneSvgElement.appendChild(waveUse);
            cloneSvgElement.appendChild(clipperUse);
            break;
          default:
            break;
        }
        // Set some extra attributes
        cloneSvgElement.setAttribute('fit', '');
        cloneSvgElement.setAttribute('height', '100%');
        cloneSvgElement.setAttribute('width', '100%');
        cloneSvgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        cloneSvgElement.setAttribute('focusable', 'false');
        // Append the cloned svg element
        this.div.appendChild(cloneSvgElement);
      }
    }
  }
}

customElements.define('nation-flag', NationFlagElement);
