import { Helmet } from 'react-helmet';
import { UsersList } from '../components/UserList';
import { useUsers } from '../store/UsersContext';

export const UsersPage = () => {
  const users = useUsers();

  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta
          name="description"
          content="users page"
        />
      </Helmet>
      <h1 className="title">Users Page</h1>

      <UsersList users={users} />
    </>
  );
};
