import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Profile = () => {
  return (
    <div>
      <div className="p-10 flex justify-center">
        <div className="w-[400px] bg-[#1A1B21] rounded-[10px] shadow-lg overflow-hidden text-white">
          {/* Profile Image */}
          <div className="bg-[#1A1B21]">
            <img
              src="https://i.ibb.co/fVQ5bSj4/anas-photo.jpg"
              alt="Anas Photo"
              className="h-[400px] w-full object-cover rounded-t-[10px]"
            />
          </div>

          {/* Info Section */}
          <div className="px-10 py-5">
            <div className="text-center">
              <h2 className="text-[25px] font-bold leading-[30px] mb-0">
                MOHD ANAS MAROOF
              </h2>
              <p className="text-[#F3BF99] text-[13px] font-normal mb-5">
                Software Developer - Machine Learning Engineer
              </p>
            </div>

            {/* About Content */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-1">About</h4>
                <p className="text-[#DCDCDC] text-[12px] leading-[15px]">
                  Anas is a passionate Software Developer with a deep curiosity
                  for Artificial Intelligence, Machine Learning, and Deep
                  Learning. He blends modern development tools with intelligent
                  algorithms to create meaningful and innovative solutions that
                  bridge technology and imagination.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1">Interests</h4>
                <p className="text-[#DCDCDC] text-[12px] leading-[15px]">
                  Movie lover and SRK admirer. Cricket watcher. Reader of crime
                  thrillers. Thinks he's funny too. For him, family
                  and friendship mean everything.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-[#161619] h-16 flex items-center justify-center rounded-b-[10px]">
            <div className="flex gap-6 text-xl">
              <a
                href="mailto:anasmaroofamu56@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EA4335] transition-transform hover:scale-110"
              >
                <SiGmail />
              </a>
              <a
                href="https://github.com/anas-maroof"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5093E2] transition-transform hover:scale-110"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-anas-maroof-45a650295/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5093E2] transition-transform hover:scale-110"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;