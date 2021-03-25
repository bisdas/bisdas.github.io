import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function PortalWrapper({ children }) {
    const portalRoot = document.getElementById('portal-root');
    const element = document.createElement('div');

    useEffect(() => {
        portalRoot.appendChild(element);
        return () => portalRoot.removeChild(element);
    }, [element, portalRoot]);

    return createPortal(children, element)
}