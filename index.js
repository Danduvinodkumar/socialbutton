const Button = (props) => {
  const { className, children } = props;

  return <button className={className}>{children}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="social-button like-button" children="Like" />
      <Button className="social-button comment-button" children="Comment" />
      <Button className="social-button share-button" children="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
