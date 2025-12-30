export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1203_63)">
          <path
            d="M10 20c5.523 0 10-4.477 10-10 0-.626-.058-1.238-.168-1.832A10.058 10.058 0 0018 8C12.477 8 8 12.477 8 18c0 .626.058 1.238.168 1.832.594.11 1.206.168 1.832.168z"
            fill="#00523F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.168 19.832C3.52 18.973 0 14.898 0 10 0 4.477 4.477 0 10 0c4.897 0 8.972 3.52 9.832 8.168A10.057 10.057 0 0018 8C12.477 8 8 12.477 8 18c0 .626.058 1.238.168 1.832z"
            fill="#179A7C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20c5.523 0 10-4.477 10-10 0-.626-.058-1.238-.168-1.833C24.48 9.028 28 13.103 28 18c0 5.523-4.477 10-10 10-4.897 0-8.972-3.52-9.833-8.168.595.11 1.207.168 1.833.168z"
            fill="#00BC7D"
          />
        </g>
        <defs>
          <clipPath id="clip0_1203_63">
            <path fill="#fff" d="M0 0H28V28H0z" />
          </clipPath>
        </defs>
      </svg>

      <span className="text-xl font-bold text-primary">budget.</span>
    </div>
  );
}
