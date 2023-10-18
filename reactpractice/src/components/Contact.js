import Call from "../call.svg";
import Mail from "../mail.svg";

function Contact() {
  return (
    <>
      <ul class="list-none">
        <li class="text-[#B2B8FF] font-inter pb-8 text-[24px]">Contact</li>
        <li class="text-white text-[24px] py-2 flex flex-row">
          <img src={Call} class="pr-2" alt="logo" />
          0850 455 55 55
        </li>
        <li class="text-white text-[12px] py-2">
          You can call us 24/7 for any questions, suggestions and complaints.
        </li>
        <li class="text-white text-[24px] py-2 flex flex-row">
          {" "}
          <img src={Mail} class="pr-2" alt="logo" />
          help@covchat.com
        </li>
      </ul>
    </>
  );
}

export default Contact;
