import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type Navigation = {
  title: string;
  href: string;
  children: { title: string; href: string; disabled?: boolean }[];
}[];

const disabled = true;

export const navigation: Navigation = [
  {
    title: "FORMS",
    href: "",
    children: [
      { title: "Button", href: "/comp/button" },
      { title: "Select", href: "/comp/select", disabled },
      { title: "Checkbox", href: "/comp/checkbox", disabled },
    ],
  },
  {
    title: "INTERACTIONS",
    href: "",
    children: [
      { title: "Modal", href: "/comp/modal" },
      { title: "Dropdown", href: "/comp/dropdown" },
    ],
  },
  {
    title: "MEDIA",
    href: "",
    children: [{ title: "Icon", href: "/comp/icon" }],
  },
];

const SideBarNavigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="flex flex-col gap-8">
      <div className="mb-3">
        {navigation.map((navRoot) => (
          <div key={navRoot.title}>
            <div className="text-primary px-2 text-lg font-semibold uppercase tracking-wide">
              {navRoot.title}
            </div>
            {navRoot.children.map((navChild) =>
              !(navChild.disabled ?? false) ? (
                <Link
                  href={navChild.href}
                  key={navChild.title}
                  className={classNames(
                    currentRoute === navChild.href && "underline decoration-2 underline-offset-2",
                    "cursor-base decoration-primary hover:text-primary relative flex w-full ",
                    "items-center rounded border-0 bg-transparent px-2 py-1 text-base font-light transition-all"
                  )}
                >
                  {navChild.title}
                </Link>
              ) : (
                <div
                  className="text-base-content relative flex w-full cursor-not-allowed items-center rounded border-0 px-2 py-1 text-base opacity-30"
                  key={navChild.title}
                >
                  {navChild.title}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideBarNavigation;
