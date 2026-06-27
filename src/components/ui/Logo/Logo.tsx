import { getPublicAssetPath } from "../../../utils/getPublicAssetPath";
import "./Logo.css";

type LogoProps = {
  className?: string;
};

function Logo({ className = "" }: LogoProps) {
  return (
    <img
      className={`logo ${className}`.trim()}
      src={getPublicAssetPath("assets/logo/TradeOpsBridge.png")}
      alt="TradeOps Bridge"
    />
  );
}

export default Logo;
