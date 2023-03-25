function FormsForm() {
  return (
    <form>
      <div>
        <img src="" alt="photo" />
        <label htmlFor="file">
          Upload photo
          <input type="file" id="file" style={{ display: 'none' }} />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        <div>
          <label htmlFor="male">Sex: </label>
          <input type="radio" name="sex" id="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="sex" id="female" />
          <label htmlFor="female">Female</label>
        </div>
        <label htmlFor="birthDate">
          Date of birth:
          <input type="text" id="birthDate" />
        </label>
        <label htmlFor="continent">
          Continent:
          <select id="continent">
            <option value="eurasia">Eurasia</option>
            <option value="northAmerica">North America</option>
            <option value="southAmerica">South America</option>
            <option value="africa">Africa</option>
            <option value="australia">Australia</option>
            <option value="antarctica">Antarctica</option>
          </select>
        </label>
      </div>
      <label htmlFor="agreement">
        <input type="checkbox" id="agreement" /> I consent to my personal data
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default FormsForm;
