const EmailVerification = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-screen p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-10 mb-12">
          Verify Email
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="OTP"
            id="otp"
            className="bg-slate-100 p-3 rounded-lg"
          />

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Verify
          </button>
        </form>
      </div>
    </>
  );
};

export default EmailVerification;
