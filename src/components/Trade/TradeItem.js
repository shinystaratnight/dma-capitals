function TradeItem(props) {
  const {
    imgSrc,
    title,
    content
  } = props;

  return (
    <div className="trade__item">
      <div className="trade__item-image">
        <img src={imgSrc} width={64} height={64} loading="lazy" />
      </div>
      <div className="trade__item-info">
        <strong>{title}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TradeItem;
