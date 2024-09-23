import Info from "../Info";
import Owner from "./Sidebar/Owner";
import Socialshare from "./Sidebar/Socialshare";

const BlogDetail = () => {
  return (
    <div className="flex gap-4 flex-col">
      <img
        src="../../../public/news/Image (2).png"
        className="w-full min-h-96 bg-gray-300 object-cover rounded-xl max-h-96"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <Info />
        <h1>
          Maecenas tempor urna sed quam mollis, a placerat dui fringill
          Suspendisse.
        </h1>
        <div className="py-8 flex flex-row items-center justify-between">
          <Owner />
          <Socialshare />
        </div>
        <h2>
          Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
          dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
        </h2>
        <p>
          Maecenas elementum in risus sed condimentum. Duis convallis ante ac
          tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus
          vitae orci at euismod. Integer auctor augue in erat vehicula, quis
          fermentum ex finibus.
        </p>
        <p>
          Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam
          interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices
          lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum
          turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula
          viverra neque, malesuada consectetur diam sapien volutpat risus.
          Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc
          sit amet erat quis ex convallis suscipit. ur ridiculus mus.
        </p>
        <div className="flex gap-2">
          <img
            src="/news/Image (2).png"
            className="w-1/2 rounded-xl min-h-32"
            alt=""
          />
          <img
            src="/news/Image (1).png"
            className="w-1/2 rounded-xl min-h-32"
            alt=""
          />
        </div>
        <p>
          Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
          vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum
          rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin
          iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam
          faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia
          eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
        </p>
        <div
          className="min-h-56 bg-green-200 overflow-clip relative p-8 rounded-xl bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('/news/Image (2).png')` }}
        >
          <div className="z-20 flex flex-row items-center gap-8 absolute">
            <div className="flex flex-col gap-2">
              <p className="text-white">Summer Sales</p>
              <h1 className="text-white">Fresh Fruit</h1>
              <button className="rounded-full px-4">Shop now</button>
            </div>
            <div>
              <span className="flex flex-col justify-center items-center p-8 size-24 rounded-full bg-orange-500/50 ring-8 ring-orange-500/20">
                <p className="text-white text-sm w-full text-center min-w-32">up to</p>
                <h1 className="text-orange-500 text-xl w-full text-center min-w-32">56%</h1>
                <p className="text-white text-sm w-full text-center min-w-32">off</p>
              </span>
            </div>
          </div>

          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-black from-50% to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
