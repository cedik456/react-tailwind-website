import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid gap-8 px-4 py-16 mx-auto text-gray-300 lg:grid-cols-3">
      <div>
        <h1 className="text-3xl font-bold text-primary-color">Increvia</h1>
        <p className="py-4 md:w-[400px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          illo voluptates debitis rerum enim quisquam nisi amet autem
          praesentium corporis.
        </p>
        <div className="flex justify-between md:w-[75%] text-2xl my-6">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitterSquare />
          <FaGithubSquare />
          <FaDribbbleSquare />
        </div>
      </div>
      <div className="flex justify-between mt-6 lg:col-span-2 lg:mr-4">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
