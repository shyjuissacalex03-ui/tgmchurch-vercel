export default function PageHeader({ title, lead }) {
  return (
    <div className="page-header">
      <div className="wrap">
        <h1>{title}</h1>
        {lead ? <p className="page-header__lead">{lead}</p> : null}
      </div>
    </div>
  );
}
