import { Avatar, AvatarImage } from "./ui/avatar";

interface SocialAuthProps {
  subtitle: string;
}

export function SocialAuth({ subtitle }: SocialAuthProps) {
  return (
    <>
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 border-t border-gray-400" />
        <span className="text-sm whitespace-nowrap text-gray-400">
          {subtitle}
        </span>
        <div className="flex-1 border-t border-gray-400" />
      </div>

      <div className="flex justify-center gap-4">
        <Avatar>
          <AvatarImage
            className="cursor-pointer"
            alt="Ícone do google"
            src="/google.svg"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            className="cursor-pointer"
            alt="Ícone do github"
            src="/github.svg"
          />
        </Avatar>
        <Avatar>
          <AvatarImage
            className="cursor-pointer"
            alt="Ícone do linkedin"
            src="/linkedin.svg"
            sizes=""
          />
        </Avatar>
      </div>
    </>
  );
}
