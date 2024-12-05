```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const {query} = router;

  // Accessing query parameters
  console.log(query.id);

  // Correctly handling query parameters
  return (
    <div>
      <h1>{query.id ? query.id : 'Loading...'}</h1>
    </div>
  );
}
```