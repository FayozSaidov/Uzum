const CounterOfDiscount = ({price, percent, customStyles}) => {

    let persentage 
    let showTheOldPrice

    if (percent > 0) {
        persentage = price * percent / 100
        showTheOldPrice = price + persentage
    }

    return(
        <span className={customStyles}>{showTheOldPrice}</span>
    )
}

export default CounterOfDiscount