import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
              <div className="flex items-center">
                <div className="text-2xl mr-2">
                  <img
                    className="h-8 w-auto sm:h-10 bg-[]"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="font-bold text-xl uppercase text-white">
                  Tokosmiles
                </div>
              </div>
    </Link>
  )
}

export default Logo