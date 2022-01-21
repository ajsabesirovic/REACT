// ==================== FUNCTIONS =========================

  // const removeUser = (uId) => {
  //   setUsers(
  //     users.filter((u) => {
  //       return u.id !== uId && u;
  //     })
  //   );
  // };
  // const fillForm = (uId) => {
  //   let editedUser = {};
  //   users.forEach((u) => {
  //     if (uId === u.id) {
  //       editedUser = u;
  //     }
  //   });
  //   setUser(editedUser);
  //   setAddEdit(2);
  // };

  // const saveEditedUser = (uId) => {
  //   setUsers((prevState) => {
  //     return prevState.map((u) => {
  //       if (uId === u.id) {
  //         return user;
  //       } else {
  //         return u;
  //       }
  //     });
  //   });
  //   setUser({
  //     name: "",
  //     username: "",
  //     email: "",
  //     is_active: false,
  //   });
  //   setAddEdit(1);
  // };

  // const inputHandler = (e) => {
  //   e.preventDefault();
  //   setUser((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  // const addNewUser = () => {
  //   if (user.username && user.email && user.name) {
  //     setUsers([...users, { id: greatesId(users) + 1, ...user }]);
  //     setUser({
  //       name: "",
  //       username: "",
  //       email: "",
  //       password: "",
  //     });
  //   }
  // };

  // const cancelEditForm = () => {
  //   setUser({
  //     name: "",
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   setAddEdit(1);
  // };