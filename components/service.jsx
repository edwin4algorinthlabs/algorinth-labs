

export default function Service({children}) {
    return  (
        <div className="w-full max-w-[1186px] mx-auto">
            {children}
        </div>
    )
}

Service.Heading = function ServiceHeading({text, sx, ...props}) {
    return (
        <h1 className={`text-2xl sm:text-[40px] font-semibold ${sx}`} {...props}>
            {text}
        </h1>
    )
}

Service.Text = function ServiceText({children}) {
    return (
        <p className="text-sm sm:text-base">
            {children}
        </p>
    )
}

Service.Title = function ServiceTitle({text}) {
    return (
        <h3 className="text-xl sm:text-2xl font-medium">
            {text}
        </h3>
    )
}

Service.Badge = function ServiceBadge({text}) {
    return (
        <div className="w-[60px] h-[60px] sm:w-[140px] sm:h-[140px] flex items-center justify-center rounded-full text-2xl sm:text-[80px] font-semibold step-badge">
            {text}
        </div>
    )
}

Service.Frame = function ServiceFrame({children, sx, ...props}) {
    return (
        <div className={`w-full max-w-[646px] ${sx}`} {...props}>
            {children}
        </div>
    )
}