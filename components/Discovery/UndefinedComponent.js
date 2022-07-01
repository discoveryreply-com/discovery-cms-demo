export default function UndefinedComponent({discoveryId}) {

    return (
        <div style={{color: 'red', marginTop: '32px', marginBottom: '32px', textAlign: 'center', fontSize: '2rem'}}>
            Unregistered component type: {discoveryId}
        </div>
    );
}
