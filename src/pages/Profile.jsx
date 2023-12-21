import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveAndClose = () => {

    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };


  return (
    <main class="main bg-dark">
      <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      {!isEditing && (
        <button className="edit-button" onClick={toggleEdit}>
          Edit Name
        </button>
      )}
      {isEditing && (
        <div className="edit-container">
          <div>
            <input type="text" placeholder="Tony" />
            <input type="text" placeholder="Jarvis" />
          </div>
          <div>
            <button onClick={saveAndClose}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </div>
        </div>
      )}
    </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;