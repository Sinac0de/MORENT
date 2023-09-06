import ProfileIcon from "../../../components/Icons/ProfileIcon";

const CarReviews = () => {
  return (
    <div className="bg-white p-5">
      {/* header */}
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <span className="bg-primary-500 py-0 px-5 text-white rounded">13</span>
      </div>
      {/* comments */}
      <div>
        <div className="flex">
          <div>
            <ProfileIcon />
          </div>
          <div>
            {/* comment header */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3>Alex Stanton</h3>
                <h4>CEO at Bukalapak</h4>
              </div>
              <div className="flex flex-col">
                <h4>21 July 2022</h4>
                <div>stars</div>
              </div>
            </div>
            {/* comment text */}
            <p>
              We are very happy with the service from the MORENT App. Morent has
              a low price . . .{" "}
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex">
        <h3>Show All</h3>
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00013 9.79939C6.5918 9.79939 6.18347 9.64189 5.8743 9.33272L2.07097 5.52939C1.9018 5.36022 1.9018 5.08022 2.07097 4.91105C2.24013 4.74189 2.52013 4.74189 2.6893 4.91105L6.49263 8.71439C6.77263 8.99439 7.22763 8.99439 7.50763 8.71439L11.311 4.91105C11.4801 4.74189 11.7601 4.74189 11.9293 4.91105C12.0985 5.08022 12.0985 5.36022 11.9293 5.52939L8.12597 9.33272C7.8168 9.64189 7.40847 9.79939 7.00013 9.79939Z"
              fill="#90A3BF"
              stroke="#90A3BF"
              strokeWidth="0.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CarReviews;
