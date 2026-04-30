export default function PageHeader({ title, lede }) {
    return (
        <div className="page-header">
            <h1>{title}</h1>
            <p className="page-lede">{lede}</p>
        </div>
    );
}
