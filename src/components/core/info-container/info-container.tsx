function InfoContainer({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex gap-x-2">
            <p>{label}:</p>
            <p>{value}</p>
        </div>
    );
}

export default InfoContainer;
