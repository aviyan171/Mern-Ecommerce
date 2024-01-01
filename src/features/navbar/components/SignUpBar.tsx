import { FaChevronDown } from 'react-icons/fa';

function SignUpBar() {
  return (
    <div>
      <div className="bg-black py-3 h-[45.6px] text-white">
        <div className="max-w-NAVBAR_INNER_WIDTH mx-auto">
          <div className="flex justify-between">
            <div>Free shipping, 30-day return or refund guarantee.</div>
            <div className="flex gap-7">
              <p>Sign In</p>
              <p>FAQS</p>
              <span className="flex items-center gap-3 flex-shrink-0">
                <p>USD</p>
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpBar;
