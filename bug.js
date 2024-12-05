```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const {query} = router;

  // Accessing query parameters
  console.log(query.id); // This will log the value of the 'id' query parameter

  // Incorrectly attempting to use query parameters before they're available
  return (
    <div>
      <h1>{query.id}</h1> {/* This might render undefined initially */}
    </div>
  );
}
```