function User({ data }) {
  return (
    <div>
      <dl>
        <div>
          <dt>Name: </dt>
          <dt>{data.name}</dt>
        </div>
        <div>
          <dt>Age: </dt>
          <dt>{data.age}</dt>
        </div>
        <div>
          <dt>Count: </dt>
          <dt>{data.count}</dt>
        </div>
      </dl>
    </div>
  );
}

export default User;
