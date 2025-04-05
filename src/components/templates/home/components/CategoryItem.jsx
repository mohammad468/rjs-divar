import React, { Suspense, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DynamicFaIcon = ({ name }) => {
  const IconComponent = React.lazy(() =>
    import("react-icons/fa").then((module) => ({ default: module[name] }))
  );

  return (
    <Suspense fallback={<span className="text-gray-400">⏳</span>}>
      <IconComponent />
    </Suspense>
  );
};

const getClassNames = ({ isOpen, isActive }) => {
  return {
    itemContainer: `
      flex items-center gap-2 p-2 rounded transition 
      cursor-pointer border-b
      ${isActive ? "bg-blue-100 text-blue-800 font-semibold" : "bg-white hover:bg-gray-100"}
    `,
    iconToggle: `
      text-gray-500 transition-transform duration-300 
      ${isOpen ? "rotate-180" : ""}
    `,
    title: "flex-1 text-right",
    childrenWrapper: `
      overflow-hidden transition-all duration-300 ease-in-out 
      ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
    `,
  };
};

function CategoryItem({ name, slug, active, setActive, icon, order, children = [], level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children.length > 0;
  const isActive = slug === active;

  const classes = getClassNames({ isOpen, isActive });

  const sortedChildren = [...children].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div style={{ marginRight: `${level * 16}px` }}>
      <div className={classes.itemContainer}>
        {icon && <DynamicFaIcon name={icon} />}
        <span className={classes.title} onClick={() => setActive(slug)}>
          {name}
        </span>
        {hasChildren ? (
          <span
            className={classes.iconToggle}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        ) : (
          <span className="w-4" />
        )}
      </div>

      <div className={classes.childrenWrapper}>
        {hasChildren &&
          sortedChildren.map((child) => (
            <CategoryItem
              key={child.slug}
              name={child.name}
              slug={child.slug}
              icon={child.icon}
              children={child.children}
              order={child.order}
              level={level + 1}
              active={active}
              setActive={setActive}
            />
          ))}
      </div>
    </div>
  );
}

export default CategoryItem;
