import {useEffect, useState} from "react";

export function TimeZone() {
  const [event, setEvent] = useState(new Date().toUTCString())
  const options: Intl.DateTimeFormatOptions = {
    timeStyle: "long",
    timeZone: "Europe/Andorra"
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setEvent(new Date().toUTCString())
    }, 1_000)

    return () => clearInterval(interval)
  }, []);

  return <span className="font-ex text-2xl">{Intl.DateTimeFormat(undefined, options).format(new Date(event))}</span>
}