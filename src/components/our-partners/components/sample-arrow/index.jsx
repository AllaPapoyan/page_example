export const SampleNextArrow=()=> {
    const {style, onClick} = props;
    return (
        <span
            className={'icon-arrow-left2  P-arrow-slider-next'}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow =()=>{
    const {style, onClick} = props;
    return (
        <span
            className={'icon-vector2 P-arrow-slider-prev'}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}