import React from "react";
import styles from './Guia.module.css'

const ImagenGuia=({direction})=>(
    <div className={`${direction? styles.dibujoIzquierda:styles.dibujo}`}>
        <svg width="20.199482mm"
        height="60.77386mm"
        viewBox="0 0 53.199482 104.77386"
        version="1.1"
        id="svg1"
        sodipodi:docname="guia.svg"
        className={`${direction? styles.imagenSVG:''}`}
        >
       <sodipodi:namedview
          id="namedview1"/>
       <defs
          id="defs1" />
       <g
          inkscape:label="Capa 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(-99.035365,-81.293752)">
         <path className={styles.imagen}
            d="m 99.435328,81.693753 23.930492,0.41259 28.46903,46.210607 -26.81865,57.35067 h -22.69271 l 26.40606,-56.52548 z"
            id="path1" />
       </g>

        </svg>

        <svg width="20.199482mm"
        height="60.77386mm"
        viewBox="0 0 53.199482 104.77386"
        version="1.1"
        id="svg1"
        sodipodi:docname="guia.svg"
        className={`${direction? styles.imagenSVG:''}`}
        >
       <sodipodi:namedview
          id="namedview1"/>
       <defs
          id="defs1" />
       <g
          inkscape:label="Capa 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(-99.035365,-81.293752)">
         <path className={styles.imagen2}
            d="m 99.435328,81.693753 23.930492,0.41259 28.46903,46.210607 -26.81865,57.35067 h -22.69271 l 26.40606,-56.52548 z"
            id="path1" />
       </g>

        </svg>
        <svg width="20.199482mm"
        height="60.77386mm"
        viewBox="0 0 53.199482 104.77386"
        version="1.1"
        id="svg1"
        sodipodi:docname="guia.svg"
        className={`${direction? styles.imagenSVG:''}`}
        >
       <sodipodi:namedview
          id="namedview1"
          inkscape:current-layer="layer1" />
       <defs
          id="defs1" />
       <g
          transform="translate(-99.035365,-81.293752)">
         <path className={styles.imagen3}
            d="m 99.435328,81.693753 23.930492,0.41259 28.46903,46.210607 -26.81865,57.35067 h -22.69271 l 26.40606,-56.52548 z"
            id="path1" />
       </g>

        </svg>
    </div>
)
export default ImagenGuia;