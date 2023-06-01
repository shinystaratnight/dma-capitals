function GuideItem(props) {
  const {
    active,
    counter,
    title,
    content
  } = props;

  return (
    <div className="guide__item">
      <div className={`guide__item-number ${active ? "active" : ""}`}>{counter}</div>
      <div className="section__subtitle guide__item-description">
        <div className="guide__item-title">{title}</div>
        <div className="section__text guide__item-content">{content}</div>
      </div>
    </div>
  );
}

export default GuideItem;
