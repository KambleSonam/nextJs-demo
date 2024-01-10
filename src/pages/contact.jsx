import Link from 'next/link'
export default function Contact(){
    if (typeof window !== 'undefined') {
        let ctInstance = window.clevertap
        if(ctInstance){
            ctInstance.event.push('xxxx'); // Popup Campaign
            ctInstance.event.push('xxxx'); // Banner Campaign
            ctInstance.event.push('xxxx');
        }
      }
return(
    <>
    <div>
        Contact US page
    </div>
    <div>
    <Link href="/">Go back</Link>
    </div>
    </>
)
}