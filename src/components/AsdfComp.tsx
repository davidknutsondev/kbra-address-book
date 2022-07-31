import { useGetContactsQuery } from '../services/contacts';

const AsdfComp: React.FC = () => {
  //   const { data, error, isLoading } = useGetContactByIdQuery('1');
  const { data, error, isLoading } = useGetContactsQuery();
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {/* <h3>{data.firstName}</h3>
          <img src={data.avatar} alt={data.firstName} /> */}
          {data.map((contact) => (
            <>
              <h3>{contact.firstName}</h3>
              <img src={contact.avatar} alt={contact.firstName} />
            </>
          ))}
        </>
      ) : null}
    </>
  );
};

export default AsdfComp;
