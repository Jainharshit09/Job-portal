const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const option: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return date.toLocaleString('en-US', option);
};

function timeAgo(dateArray: number[] | undefined): string {
    if (!dateArray || dateArray.length === 0) {
        return "Invalid date";
    }
    const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();

    const diffInMin = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMin / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    } else if (diffInDays > 0) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMin > 0) {
        return `${diffInMin} minute${diffInMin > 1 ? 's' : ''} ago`;
    } else {
        return "just now";
    }
}

const getBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);      
    }
    )
  }

  function formatInterviewTime(arr: [number, number, number, number, number, number?, number?]): string {
    if (!Array.isArray(arr) || arr.length < 5) {
        throw new Error("Invalid date array. Expected at least [year, month, day, hour, minute].");
    }

    const [year, month, day, hour, minute] = arr;
    const date = new Date(year, month - 1, day, hour, minute);

    const getOrdinal = (n: number): string => {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
    };

    return `${date.toLocaleString("en-US", { month: "long" })} ${day}${getOrdinal(day)}, ${year} ${date.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
}


const openBase64Pdf = (base64String: string) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const blob = new Blob([byteNumbers], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    
    window.open(blobUrl, "_blank");
    
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
};

const Utilites = {
    formatDate,
    timeAgo,
    getBase64,
    formatInterviewTime,
    openBase64Pdf
}
export default Utilites;