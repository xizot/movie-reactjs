export const getErrorResponse = (err) => {
    return (
        <>
            {err.response.data.error
                ? err.response.data.error
                : err.response.data.errors.map((item, idx) => (
                      <p key={idx}>{item.msg}.</p>
                  ))}
        </>
    );
};
