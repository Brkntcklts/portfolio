const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen flex items-center justify-center p-4">
      <form action="https://getform.io/f/a1c5d5e2-3f3f-4c2a-9c0f-5c5c5c5c5c5c" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#00df9a] text-gray-300">İletişim</p>
          <p className="text-gray-300 py-4">Aşağıdaki formu doldurarak veya berkantcakiltas@gmail.com adresinden bana ulaşabilirsiniz.</p>
        </div>
        <input className="bg-[#ccd6f6] p-2 rounded-md" type="text" placeholder="İsim" name="name" required />
        <input className="my-4 p-2 bg-[#ccd6f6] rounded-md" type="email" placeholder="Email" name="email" required />
        <textarea className="bg-[#ccd6f6] p-2 rounded-md" name="message" rows="10" placeholder="Mesajınız" required></textarea>
        <button className="text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center rounded-md duration-300">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact; 