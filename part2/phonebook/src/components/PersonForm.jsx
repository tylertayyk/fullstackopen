const PersonForm = ({
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
    handleFormSubmit
}) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit" onClick={handleFormSubmit} >add</button>
            </div>
        </form>
    )
}

export default PersonForm
