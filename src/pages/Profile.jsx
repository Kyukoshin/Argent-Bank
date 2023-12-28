import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserInfos } from '../redux/auth';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userFirstName = useSelector((state) => state.auth.firstName);
  const userLastName = useSelector((state) => state.auth.lastName);
  const token = localStorage.token

  const newFirstName = useRef(null);
  const newLastName = useRef(null);

  const dispatch = useDispatch();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveAndClose = () => {
    axios
      .put(
        'http://localhost:3001/api/v1/user/profile',
        {
          firstName: newFirstName.current.value,
          lastName: newLastName.current.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      .then((response) => {
        dispatch(
          setUserInfos({
            firstName: newFirstName.current.value,
            lastName: newLastName.current.value,
          }))

        setIsEditing(false);
        console.log('Profile updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <main class="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userFirstName} {userLastName}</h1>
        {!isEditing && (
          <button className="edit-button" onClick={toggleEdit}>
            Edit Name
          </button>
        )}
        {isEditing && (
          <div className="edit-container">
            <div className="edit-container-left">
              <input type="text" ref={newFirstName} placeholder={userFirstName} />
              <button onClick={saveAndClose}>Save</button>
            </div>
            <div className="edit-container-right">
              <input type="text" ref={newLastName} placeholder={userLastName} />
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