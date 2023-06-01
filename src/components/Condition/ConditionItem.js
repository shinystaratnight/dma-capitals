function ConditionItem(props) {
  const { content } = props;

  return (
    <li>
      <img src="/images/condition/check_circle_outline.svg" width={24} />
      <p>{content}</p>
    </li>
  );
}

export default ConditionItem;
