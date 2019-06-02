FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY history/*.csproj ./history/
RUN dotnet restore

# copy everything else and build app
COPY history/. ./history/
WORKDIR /app/history
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /app
COPY --from=build /app/history/out ./
ENTRYPOINT ["dotnet", "history.dll"]
