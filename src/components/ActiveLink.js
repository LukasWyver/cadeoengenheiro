import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({href, title }) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === href || asPath.startsWith(href + "/")) {
    isActive = true;
  }

  return (
    <Link
      href={href}
      className={`after-bottom ${isActive && "is-active max-lg:text-secondary"}`}
    >
      {title}
    </Link>
  )
}

export default ActiveLink;
