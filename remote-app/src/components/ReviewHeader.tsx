
const ReviewHeader = () => {
    return (
        <header style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                Remote Header
            </h1>
            <span style={{
                backgroundColor: '#1e40af',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
            }}>
                v1.0.0
            </span>
        </header>
    );
};

export default ReviewHeader;
