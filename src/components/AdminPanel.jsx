import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allUsers = [];
      querySnapshot.forEach((doc) => {
        allUsers.push(doc.data());
      });
      setUsers(allUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Users</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Email</th>
            <th>UID</th>
            <th>Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.email}</td>
              <td>{user.uid}</td>
              <td>{user.createdAt.toDate ? user.createdAt.toDate().toString() : user.createdAt.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
