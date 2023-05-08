export function Filter({handleChange}) {
    return (
        <>
        <label htmlFor="filter">Find contacts by name</label>
        <input 
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
        />
  </>
    )
}