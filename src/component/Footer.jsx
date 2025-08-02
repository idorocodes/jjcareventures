const Footer = () => {
  return (
    <footer className="bg-[#02101b] text-white  px-6">
   

      {/* Bottom Strip */}
      <div className="mt-12  border-gray-700 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Doxen Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
