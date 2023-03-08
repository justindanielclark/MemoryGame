import React from "react";
import PropsType from "./_types_Card";
import colors from "../../consts/colors";

function Card({ color, handleClick }: PropsType) {
  const addedStyle = getTailwindColorClasses(color);

  return (
    <button
      className={`${addedStyle.from} ${addedStyle.to} ${addedStyle.hoverFrom} ${addedStyle.hoverTo} ${addedStyle.textColor} ${addedStyle.borderColor} transition-colors border-2 text-md w-20 h-20 text-lg font-bold rounded-full select-none bg-gradient-to-b`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }}
    >
      {`${color.slice(0, 1).toUpperCase()}${color
        .slice(1, color.length)
        .toLowerCase()}`}
    </button>
  );
}

function getTailwindColorClasses(color: typeof colors[number]): {
  textColor: string;
  borderColor: string;
  from: string;
  to: string;
  hoverFrom: string;
  hoverTo: string;
} {
  switch (color) {
    case "amber": {
      return {
        textColor: "text-amber-200",
        borderColor: "border-amber-900",
        from: "from-amber-700",
        hoverFrom: "hover:from-amber-800",
        to: "to-amber-800",
        hoverTo: "hover:to-amber-900",
      };
    }
    case "blue": {
      return {
        textColor: "text-blue-200",
        borderColor: "border-blue-900",
        from: "from-blue-700",
        hoverFrom: "hover:from-blue-800",
        to: "to-blue-800",
        hoverTo: "hover:to-blue-900",
      };
    }
    case "cyan": {
      return {
        textColor: "text-cyan-200",
        borderColor: "border-cyan-900",
        from: "from-cyan-700",
        hoverFrom: "hover:from-cyan-800",
        to: "to-cyan-800",
        hoverTo: "hover:to-cyan-900",
      };
    }
    case "emerald": {
      return {
        textColor: "text-emerald-200",
        borderColor: "border-emerald-900",

        from: "from-emerald-700",
        hoverFrom: "hover:from-emerald-800",
        to: "to-emerald-800",
        hoverTo: "hover:to-emerald-900",
      };
    }
    case "fuchsia": {
      return {
        textColor: "text-fuchsia-200",
        borderColor: "border-fuchsia-900",
        from: "from-fuchsia-700",
        hoverFrom: "hover:from-fuchsia-800",
        to: "to-fuchsia-800",
        hoverTo: "hover:to-fuchsia-900",
      };
    }
    case "gray": {
      return {
        textColor: "text-gray-200",
        borderColor: "border-gray-900",
        from: "from-gray-700",
        hoverFrom: "hover:from-gray-800",
        to: "to-gray-800",
        hoverTo: "hover:to-gray-900",
      };
    }
    case "green": {
      return {
        textColor: "text-green-200",
        borderColor: "border-green-900",
        from: "from-green-700",
        hoverFrom: "hover:from-green-800",
        to: "to-green-800",
        hoverTo: "hover:to-green-900",
      };
    }
    case "indigo": {
      return {
        textColor: "text-indigo-200",
        borderColor: "border-indigo-900",
        from: "from-indigo-700",
        hoverFrom: "hover:from-indigo-800",
        to: "to-indigo-800",
        hoverTo: "hover:to-indigo-900",
      };
    }
    case "lime": {
      return {
        textColor: "text-lime-200",
        borderColor: "border-lime-900",
        from: "from-lime-700",
        hoverFrom: "hover:from-lime-800",
        to: "to-lime-800",
        hoverTo: "hover:to-lime-900",
      };
    }
    case "orange": {
      return {
        textColor: "text-orange-200",
        borderColor: "border-orange-900",
        from: "from-orange-700",
        hoverFrom: "hover:from-orange-800",
        to: "to-orange-800",
        hoverTo: "hover:to-orange-900",
      };
    }
    case "pink": {
      return {
        textColor: "text-pink-200",
        borderColor: "border-pink-900",
        from: "from-pink-700",
        hoverFrom: "hover:from-pink-800",
        to: "to-pink-800",
        hoverTo: "hover:to-pink-900",
      };
    }
    case "purple": {
      return {
        textColor: "text-purple-200",
        borderColor: "border-purple-900",
        from: "from-purple-700",
        hoverFrom: "hover:from-purple-800",
        to: "to-purple-800",
        hoverTo: "hover:to-purple-900",
      };
    }
    case "red": {
      return {
        textColor: "text-red-200",
        borderColor: "border-red-900",
        from: "from-red-700",
        hoverFrom: "hover:from-red-800",
        to: "to-red-800",
        hoverTo: "hover:to-red-900",
      };
    }
    case "rose": {
      return {
        textColor: "text-rose-200",
        borderColor: "border-rose-900",
        from: "from-rose-700",
        hoverFrom: "hover:from-rose-800",
        to: "to-rose-800",
        hoverTo: "hover:to-rose-900",
      };
    }
    case "sky": {
      return {
        textColor: "text-sky-200",
        borderColor: "border-sky-900",
        from: "from-sky-700",
        hoverFrom: "hover:from-sky-800",
        to: "to-sky-800",
        hoverTo: "hover:to-sky-900",
      };
    }
    case "stone": {
      return {
        textColor: "text-stone-200",
        borderColor: "border-stone-900",
        from: "from-stone-700",
        hoverFrom: "hover:from-stone-800",
        to: "to-stone-800",
        hoverTo: "hover:to-stone-900",
      };
    }
    case "teal": {
      return {
        textColor: "text-teal-200",
        borderColor: "border-teal-900",
        from: "from-teal-700",
        hoverFrom: "hover:from-teal-800",
        to: "to-teal-800",
        hoverTo: "hover:to-teal-900",
      };
    }
    case "violet": {
      return {
        textColor: "text-violet-200",
        borderColor: "border-violet-900",
        from: "from-violet-700",
        hoverFrom: "hover:from-violet-800",
        to: "to-violet-800",
        hoverTo: "hover:to-violet-900",
      };
    }
    case "yellow": {
      return {
        textColor: "text-yellow-200",
        borderColor: "border-yellow-900",
        from: "from-yellow-700",
        hoverFrom: "hover:from-yellow-800",
        to: "to-yellow-800",
        hoverTo: "hover:to-yellow-900",
      };
    }
    case "zinc": {
      return {
        textColor: "text-zinc-200",
        borderColor: "border-zinc-900",
        from: "from-zinc-700",
        hoverFrom: "hover:from-zinc-800",
        to: "to-zinc-800",
        hoverTo: "hover:to-zinc-900",
      };
    }
  }
}

export default Card;
