/**
 * Select the closest element from another.
 *
 * @param {HTMLElement} element
 * @param {string} selector
 * @returns {HTMLAnchorElement|HTMLElement|HTMLAreaElement|HTMLAudioElement|HTMLBaseElement|HTMLQuoteElement|HTMLBodyElement|HTMLBRElement|HTMLButtonElement|HTMLCanvasElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLDataElement|HTMLDataListElement|HTMLModElement|HTMLDetailsElement|HTMLDialogElement|HTMLDivElement|HTMLDListElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFormElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLabelElement|HTMLLegendElement|HTMLLIElement|HTMLLinkElement|HTMLMapElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLObjectElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLScriptElement|HTMLSelectElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableElement|HTMLTableSectionElement|HTMLTableCellElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTableRowElement|HTMLTrackElement|HTMLUListElement|HTMLVideoElement|*}
 */
export default function closestElement(element, selector) {
    const recurse = parent => {
        parent = parent.parentNode;

        if ( !parent ) {
            return;
        }

        const sibling = parent.nextElementSibling;

        if ( sibling ) {
            const closestSibling = sibling.closest( selector );

            if ( closestSibling ) {
                return closestSibling;
            }

            return recurse( sibling );
        }

        return recurse( parent );
    };

    return recurse( element );
}